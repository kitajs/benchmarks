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
* __Node:__ `v20.20.0`
* __Run:__ Mon Jan 26 2026 01:46:17 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| kita                     | 1.1.36   | ✓      | 46721.6    | 20.88        | 8.38          |
| bare                     | v20.20.0 | ✗      | 46698.4    | 20.90        | 8.33          |
| connect                  | 3.7.0    | ✗      | 45787.2    | 21.34        | 8.16          |
| polka                    | 0.5.2    | ✓      | 45705.6    | 21.38        | 8.15          |
| rayo                     | 1.4.6    | ✓      | 44858.4    | 21.80        | 8.00          |
| server-base-router       | 7.1.32   | ✓      | 44612.0    | 21.91        | 7.96          |
| fastify                  | 4.29.1   | ✓      | 44608.0    | 21.92        | 8.00          |
| polkadot                 | 1.0.0    | ✗      | 43969.6    | 22.24        | 7.84          |
| h3                       | 1.15.5   | ✗      | 43821.6    | 22.32        | 7.82          |
| 0http                    | 3.5.3    | ✓      | 43750.4    | 22.36        | 7.80          |
| server-base              | 7.1.32   | ✗      | 42993.6    | 22.76        | 7.67          |
| connect-router           | 1.3.8    | ✓      | 42936.0    | 22.78        | 7.66          |
| h3-router                | 1.15.5   | ✓      | 41698.4    | 23.48        | 7.44          |
| hono                     | 4.11.5   | ✓      | 37554.4    | 26.13        | 6.16          |
| koa                      | 2.16.3   | ✗      | 37255.4    | 26.34        | 6.64          |
| restana                  | 4.9.9    | ✓      | 36129.4    | 27.18        | 6.44          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35366.6    | 27.77        | 6.31          |
| restify                  | 11.1.0   | ✓      | 34900.6    | 28.15        | 6.29          |
| take-five                | 2.0.0    | ✓      | 34846.6    | 28.19        | 12.53         |
| koa-router               | 12.0.1   | ✓      | 33669.6    | 29.20        | 6.00          |
| hapi                     | 21.4.4   | ✓      | 31696.4    | 31.04        | 5.65          |
| fastify-big-json         | 4.29.1   | ✓      | 11759.6    | 84.46        | 135.29        |
| express                  | 4.22.1   | ✓      | 10644.8    | 93.37        | 1.90          |
| express-with-middlewares | 4.22.1   | ✓      | 10268.6    | 96.80        | 3.82          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
