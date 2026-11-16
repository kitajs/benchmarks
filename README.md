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
* __Node:__ `v20.20.2`
* __Run:__ Mon Nov 16 2026 04:31:14 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 71612.4    | 13.44        | 12.77         |
| polka                    | 0.5.2    | ✓      | 70932.4    | 13.59        | 12.65         |
| connect                  | 3.7.0    | ✗      | 69709.2    | 13.84        | 12.43         |
| server-base              | 7.1.32   | ✗      | 69460.4    | 13.88        | 12.39         |
| rayo                     | 1.4.6    | ✓      | 69317.6    | 13.92        | 12.36         |
| fastify                  | 4.29.1   | ✓      | 69039.2    | 13.97        | 12.38         |
| kita                     | 1.1.36   | ✓      | 68868.8    | 14.01        | 12.35         |
| server-base-router       | 7.1.32   | ✓      | 67830.4    | 14.24        | 12.10         |
| connect-router           | 1.3.8    | ✓      | 65844.0    | 14.67        | 11.74         |
| hono                     | 4.13.18  | ✓      | 61556.8    | 15.76        | 10.10         |
| polkadot                 | 1.0.0    | ✗      | 61521.6    | 15.75        | 10.97         |
| 0http                    | 3.5.3    | ✓      | 58608.8    | 16.56        | 10.45         |
| koa                      | 2.16.4   | ✗      | 57708.0    | 16.81        | 10.29         |
| take-five                | 2.0.0    | ✓      | 55215.2    | 17.60        | 19.85         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 54955.2    | 17.72        | 9.80          |
| restana                  | 4.9.9    | ✓      | 54051.2    | 18.00        | 9.64          |
| h3                       | 1.15.11  | ✗      | 53227.2    | 18.29        | 9.49          |
| restify                  | 11.1.0   | ✓      | 53196.0    | 18.31        | 9.59          |
| koa-router               | 12.0.1   | ✓      | 52877.6    | 18.39        | 9.43          |
| h3-router                | 1.15.11  | ✓      | 50996.0    | 19.11        | 9.09          |
| hapi                     | 21.4.13  | ✓      | 46437.6    | 21.04        | 8.28          |
| express                  | 4.22.3   | ✓      | 16369.5    | 60.54        | 2.92          |
| express-with-middlewares | 4.22.3   | ✓      | 15820.3    | 62.67        | 5.88          |
| fastify-big-json         | 4.29.1   | ✓      | 14828.4    | 66.91        | 170.61        |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
