<div align="center">
  <img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" width="650" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)

</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is comparatively.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then 

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.5`
* __Run:__ Mon Oct 06 2025 01:32:13 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.5 | ✗      | 46696.0    | 20.91        | 8.33          |
| polka                    | 0.5.2    | ✓      | 46109.6    | 21.19        | 8.22          |
| kita                     | 1.1.36   | ✓      | 46072.0    | 21.20        | 8.26          |
| rayo                     | 1.4.6    | ✓      | 45877.6    | 21.29        | 8.18          |
| connect                  | 3.7.0    | ✗      | 45741.0    | 21.35        | 8.16          |
| fastify                  | 4.29.1   | ✓      | 45594.4    | 21.43        | 8.17          |
| server-base              | 7.1.32   | ✗      | 45472.8    | 21.49        | 8.11          |
| server-base-router       | 7.1.32   | ✓      | 45444.0    | 21.51        | 8.11          |
| polkadot                 | 1.0.0    | ✗      | 44713.6    | 21.87        | 7.97          |
| 0http                    | 3.5.3    | ✓      | 44384.0    | 22.03        | 7.92          |
| connect-router           | 1.3.8    | ✓      | 42600.0    | 22.97        | 7.60          |
| h3                       | 1.15.4   | ✗      | 41745.6    | 23.46        | 7.44          |
| h3-router                | 1.15.4   | ✓      | 41234.4    | 23.75        | 7.35          |
| restana                  | 4.9.9    | ✓      | 37702.4    | 26.03        | 6.72          |
| hono                     | 4.9.10   | ✓      | 36719.2    | 26.74        | 6.02          |
| koa                      | 2.16.2   | ✗      | 36483.0    | 26.90        | 6.51          |
| take-five                | 2.0.0    | ✓      | 35057.0    | 28.03        | 12.60         |
| restify                  | 11.1.0   | ✓      | 34704.6    | 28.30        | 6.25          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34684.8    | 28.32        | 6.19          |
| koa-router               | 12.0.1   | ✓      | 33125.4    | 29.67        | 5.91          |
| hapi                     | 21.4.3   | ✓      | 30981.2    | 31.76        | 5.53          |
| fastify-big-json         | 4.29.1   | ✓      | 11974.0    | 82.95        | 137.78        |
| express                  | 4.21.2   | ✓      | 10871.4    | 91.38        | 1.94          |
| express-with-middlewares | 4.21.2   | ✓      | 10160.9    | 97.82        | 3.78          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
